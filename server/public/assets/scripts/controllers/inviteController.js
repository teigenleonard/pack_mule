myApp.controller('InviteController', [  'MailService', function( MailService) {
  var invite = this;
  console.log('InviteController');

  invite.emailForm = MailService.emailInvite;



}]);
