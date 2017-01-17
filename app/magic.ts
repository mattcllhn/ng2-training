class Greeter{
  saySomething(msg: string = "whazzap"){
    return msg+ 'you face';

  }
}

var greeter = new Greeter();
greeter.saySomething('helly');
