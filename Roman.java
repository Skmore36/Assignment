package Java;

import java.util.Scanner;

public class Roman {
    public static void main(String[] args) {
        
    	Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Enter an integer between 1 and 100 : ");
            String input = scanner.next();

            try {
                int number = Integer.parseInt(input);

                if (number >= 1 && number <= 100) {
                    String roman = intToRoman(number);
                    System.out.println(number + " = " + roman);
                } else {
                    System.out.println("Please enter an integer between 1 and 100.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid integer or type 'QUIT' to exit.");
            }
        }
    }

    public static String intToRoman(int num) {
        String[] th = {"", "M", "MM", "MMM"};
        String[] hund = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
        String[] ten = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
        String[] one = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};

        return th[num / 1000] + hund[(num / 100) % 10] + ten[(num / 10) % 10] + one[num % 10];
    }
}
