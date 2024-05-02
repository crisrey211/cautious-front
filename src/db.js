import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect()
        console.log('>>>>BBDD conectada correctamente')
    } catch (error) {
        console.log(error)
    }
}
