import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the HomeStudent page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-student',
  templateUrl: 'home-student.html',

})
export class HomeStudent {
  private items: string[];

  query: string = "";
  listitem:string= '' ;

 constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {this.initializeItems();
      this.items=[];
  }

  initializeItems() {
    this.items = [
      'Harvey Burton',
      'Barnett Crosby',
      'Peck Brock',
      'Rachel Robinson',
      'Suzette Frazier',
      'Bettie Maddox',
      'Haley Bates',
      'Tania Chandler',
      'Woods Nicholson'
    ]
  }

  getItems() {
    
    console.log('The search button has been clicked...');

    this.initializeItems();
    let val = this.query
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.items=[];
    }
  }

  setitem(item){
     this.listitem = item;
     this.items=[];
  }

  public event = {
    
    month: '2017-01-01',
    timeStarts: '08:30'
  }
  
 openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Request Confirmation',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Send Request',
          icon:'send',
          handler: () => {
            console.log('Send Request clicked');
          }
        },
        
        {
          text: 'Cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
    
  }
}

  


