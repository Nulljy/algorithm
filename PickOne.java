import java.util.Scanner;

public class PickOne {

	public static void main(String[] args) {
		// s를 입력받고 가운데 글자 반환, length가 even이면 두글자 반환
		Scanner sc = new Scanner(System.in);
		String s = sc.next();
		
		System.out.println(solution(s));
	}
	
	static String solution(String s) {
		int length = s.length();
		int start = Math.round(length / 2);
		return length % 2 != 0 ? s.substring(start, start + 1) : s.substring(start - 1, start + 1);
	}
}
