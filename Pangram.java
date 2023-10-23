package Java;

import java.util.Scanner;

public class Pangram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence : ");
        String s = scanner.next();
        scanner.close();

        boolean isPangram = isPangram(s);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String s) {
        s = s.toLowerCase();

        for (char l = 'a'; l <= 'z'; l++) {
            if (s.indexOf(l) == -1) {
                return false;
            }
        }

        return true;
    }
}
