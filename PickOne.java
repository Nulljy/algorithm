import java.util.Scanner;

public class PickOne {

	public static void main(String[] args) {
		// s�� �Է¹ް� ��� ���� ��ȯ, length�� even�̸� �α��� ��ȯ
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
