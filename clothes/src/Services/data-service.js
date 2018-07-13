//Singleton Pattern, Notification Observer Pattern
//Singleton- Only ever one instance in memory 
import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notifications'

let ns =            new NotificationService();
let instance =      null;
var wishList =      [];


class DataService{
     constructor(){
         if(!instance){
              instance = this;
         }
         return instance;
        
     }



    addWishListItem = item =>{
        // console.log("WishList Updated",item);
        wishList.push(item);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
    }
    

    removeWishListItem = item => {
        // console.log("WishList Updated",item);
        for(var x=0;x<wishList.length;x++){
            if(wishList[x]._id === item._id){
                wishList.splice(x,1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED,wishList);
                break;
            }
        }
    }



     itemOnWishList = (item) => {
         for(var x=0;x<wishList.length; x++){
             if(item._id === wishList[x]._id){
                 return true;
             }
         }
         return false;
     }
}

export default DataService;