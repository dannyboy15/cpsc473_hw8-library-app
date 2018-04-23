import Controller from '@ember/controller';
import { and, gte, match, not } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  message: '',

  isMsgLongEnough: gte("message.length", 5),
  isEmailValid: match('emailAddress', /^.+@.+\..+$/),
  isBothTrue: and('isMsgLongEnough', 'isEmailValid'),
  isDisabled: not('isBothTrue'),

  actions: {

    sendMessage() {
      alert(`Sending a message from : ${this.get('emailAddress')}\nIt says: ${this.get('message')}`);
      this.set('responseMessage', "We got your message and we’ll get in touch soon");
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
