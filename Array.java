package Java;

public class Array {
	
	public void shuffleArray(int[] arr) {
		
		int n = arr.length;
		for (int i = n - 1; i > 0; i--) {
		    // Generating random index
		    int index = (int) (Math.random() * (i + 1));
		    //System.out.println(index);
		    // Swaping elements using index
		    int temp = arr[i];
		    arr[i] = arr[index];
		    arr[index] = temp;
		}
	}	
    public static void main(String[] args) {
    	
    	Array a = new Array();
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        System.out.println("Array before shuffling : ");
        for(int ar : array) {
        	System.out.print(ar+" ");
        }
        System.out.println();
        a.shuffleArray(array);

        // Printinghuffled array
        System.out.println("Array after shuffling");
        for (int value : array) {
        	System.out.print(value + " ");
        }
    }
}