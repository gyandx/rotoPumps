"use strict";
exports.__esModule = true;
exports.OrderDetails = void 0;
var OrderDetails = /** @class */ (function () {
    function OrderDetails(id, user_id, address_id, amount, transaction_id, order_status, created_at, updated_at, itemQuantity) {
        this.id = id;
        this.user_id = user_id;
        this.address_id = address_id;
        this.amount = amount;
        this.transaction_id = transaction_id;
        this.order_status = order_status;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.itemQuantity = itemQuantity;
    }
    return OrderDetails;
}());
exports.OrderDetails = OrderDetails;
