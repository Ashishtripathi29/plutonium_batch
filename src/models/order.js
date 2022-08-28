const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
//  date=Schema.Types.Date
//const { Schema } = mongoose;
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref:'Userw5d4'    },
    productId: {
      type:ObjectId,
      ref:'Product' },
    amount: {
      type: Number
    },
    isFreeAppUser: {
      type: Boolean,
      default:false
    },
    date:{
      type:Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
