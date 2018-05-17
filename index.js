/**
 * Created by zhouli on 18/5/16
 */
'use strict';
function SmartPost() {
    this.message = null;
    this.container = [];
    this.push = function (item) {
        item.get = this.get;
        this.container.push(item);
    }
    this.get = function (message) {
        this.setState(message);
    }
    this.post = function (message, target) {
        this.message = message;
        this.notifyItemByTarget(target);
    }
    this.notifyItemByTarget = function (target) {
        var len = this.container.length;
        var item = null;
        for (let i = 0; i < len; i++) {
            item = this.container[i];
            if (target && item.constructor.name === target) {
                item.get(this.message);
                return;
            } else {
                item.get(this.message);
            }
        }
    }
}
var smartPost = new SmartPost();
export default smartPost;



