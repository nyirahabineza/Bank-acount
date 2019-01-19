var Balance;
function info(first,number,initialDeposit,withdraw,deposit){
    this.fullName=first;
    this.PhoneNumber=number;
    this.initialDeposit=initialDeposit;
    this.withdraw=withdraw;
    this.deposit=deposit;
}

$(document).ready(function(){
  
    $("form#new-contact").submit(function(event) {
        event.preventDefault();
        var fullName=$("input#new-first-name").val();
        var phoneNumber=$("input#new-number-phone").val();
        var initialDeposit=parseInt($("input#new-initial-deposit").val());
        var withdraw=parseInt($("input#new-withdraw-amount").val());
        var deposit=parseInt($("input#new-deposite-amount").val());
        var newInfo=new info(fullName,phoneNumber,initialDeposit,withdraw,deposit);

    Balance=initialDeposit-withdraw+deposit
         console.log(Balance)
$("#new-account").show();
// $("form#new-contact").hide();
$(".first-name").text( newInfo.fullName);
$(".number-phone").text(newInfo.PhoneNumber);
$(".initial-deposite").text(newInfo.initialDeposit);
$(".deposite-amount").text(newInfo.withdraw);
$(".withdraw-amount").text(Balance);
console.log(Balance)

  

    }); 
    $("#depositbtn").click(function(){ 
        $("input#depositAmount").val(newInfo.initialDeposit);
        

});
});