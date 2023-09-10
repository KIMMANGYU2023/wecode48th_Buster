const  { AppDataSource }  = require("./dataSource");

const postOrder = async (
    userId,
    name, 
    email, 
    phoneNumber, 
    deliveryAddress, 
    deliveryName, 
    deliveryPhoneNumber, 
    address 
    ) => {
    try{
    const result = await AppDataSource.query(
        `
        INSERT INTO orders (
            user_id,
            name, 
            email, 
            phone_number,
            delivery_address,
            delivery_name,
            delivery_phone_number,
            address
        ) 
        VALUES (
            ?, ?, ?, ?, ?, ?, ?, ?
        );
        `,
    [
        userId,
        name, 
        email, 
        phoneNumber, 
        deliveryAddress, 
        deliveryName, 
        deliveryPhoneNumber, 
        address
    ]
);
    return result;
    } catch (err) {
    console.error('Original Error:', err); 
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
    }
};
const postPayment = async (userId, amount) => {
        try {
            await AppDataSource.beginTransaction();
    
            const [initialRows] = await AppDataSource.query(
                `SELECT point FROM users WHERE id = ?`,
                [userId]
            );
            const originalPoints = parseFloat(initialRows[0]?.point);

            if (!originalPoints || originalPoints < amount) {
                const error = new Error('User not found or insufficient point');
                error.statusCode = 404;
                throw error;
            }

            const updateResult = await AppDataSource.query(
                `UPDATE Users SET point = point - ? WHERE id = ? AND point >= ?`,
                [amount, userId, amount]
            );

            if (updateResult.affectedRows === 0) {
                const error = new Error('User not found or insufficient point');
                error.statusCode = 404;
                throw error;
            }

            await AppDataSource.query(
                `INSERT INTO PaymentHistory (user_id, amount) VALUES (?, ?)`,
                [userId, amount]
            );

            await AppDataSource.commit();

            const updatedPoints = originalPoints - amount;

            return { updateResult, updatedPoints, deductedAmount: amount };
    
        } catch (err) {

            await AppDataSource.rollback();

            const error = new Error(err.message || 'Database error');
            error.statusCode = 400;
            throw error;

        }
    };



module.exports = { postOrder, postPayment};
