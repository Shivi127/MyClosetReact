export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";     
var observers = {};
let instance = null;

class NotificationService{
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;

        // this.addObserver = this.addObserver.bind(this);
        // this.postNotification = this.postNotification.bind(this);
        // this.removeObserver = this.removeObserver.bind(this);
    }


    postNotification = (notifName, data)  => {
        var obs= observers[notifName];
        if(obs){
            for( var x=0; x<obs.length; x++){
                var obj = obs[x];
                obj.callback(data);
            }
        } 
    }
    
    addObserver= (notifName, observer, callback) => {
        console.log("Added Observer");
        let obs = observers[notifName];
        if(!obs){
            observers[notifName] = [];
        }
        let obj = { observer: observer, 
                    callback: callback}; 
        observers[notifName].push(obj);
    }
    
    removeObserver = (observer, notifName)=>{
        let obs= observers[notifName];
        if(obs){
            for( var x=0; x<obs.length; x++){
                if(observer === obs[x].observer){
                    obs.splice(x,1);
                    observers[notifName]= obs;
                    break;
                }
            }
        }
    }
}

export default NotificationService;