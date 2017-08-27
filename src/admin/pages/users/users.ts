import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonicPage, ModalController, Refresher } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { GetList, SendMessage } from '../../actions/users';
import { getUsers, getUsersPending } from '../../reducers';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { User, UserListOptions } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage implements OnInit, OnDestroy {

  /** Select user list from store */
  users$ = this.store.select(getUsers);

  /** Select user list pending state from store */
  pending$ = this.store.select(getUsersPending);

  /** User list pending observer */
  pendingObs: Subscription;

  /** User list options */
  options: UserListOptions = {
    key: '',
    search: false,
    orderReverse: false,
    checkAll: false
  };

  /** Refresher ref */
  @ViewChild(Refresher) refresher: Refresher;

  constructor(public store: Store<any>, private modalCtrl: ModalController) {
  }

  /** Send message to selected users */
  sendMessage(selectedUsers: User[]) {

    /** Show message dialog */
    const messageDialog = this.modalCtrl.create(MessageDialogComponent,
      {users: selectedUsers},
      {cssClass: 'message-dialog'}
    );

    messageDialog.onDidDismiss(message => {
      /** Send message to users if it exists */
      if (message) {
        this.store.dispatch(new SendMessage({message: message, users: selectedUsers}));
      }
    });

    messageDialog.present();
  }

  getUserList() {
    /** Refresh user list */
    this.store.dispatch(new GetList(null));
  }

  ionViewWillEnter() {
    /** Request user list on page enter */
    this.getUserList();
  }

  ngOnInit() {
    /** Complete refresher when user list is loaded */
    this.pendingObs = this.pending$.subscribe((pending) => {
      if (!pending) {
        this.refresher.complete();
      }
    });
  }

  ngOnDestroy() {
    this.pendingObs.unsubscribe();
  }

}
