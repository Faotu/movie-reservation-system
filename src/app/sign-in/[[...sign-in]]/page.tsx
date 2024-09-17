import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex justify-center py-24 bg-gradient-to-b from-gray-100 to-white">
      <SignIn initialValues={{ emailAddress: 'email@email.com' }} />
    </div>
  )
}

// Console.WriteLine("Enter the first number: ");
// string numberAInput = Console.ReadLine();
// int numberA = Convert.ToInt32(numberAInput);

// Console.WriteLine("Enter the first number: ");
// string numberBInput = Console.ReadLine();
// int numberB = Convert.ToInt32(numberBInput);

// int answer = numberA * numberB;

// Console.WriteLine("Value of " + numberA + " X " + numberB + ": ");
// string answerInput = Console.ReadLine();
// int finalAnswer = Convert.ToInt32(answerInput);

// if (answer == finalAnswer) {
//     Console.WriteLine("Your answer is correct");
// }
// else if (answer != finalAnswer)
// {
//     Console.WriteLine("Your Answer is wrong!");
// }

// Console.ReadLine();
