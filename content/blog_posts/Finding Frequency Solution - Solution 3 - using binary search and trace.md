---
title: "Finding Frequency Solution - Solution 3 - using binary search and trace"
date: 2021-11-20T22:24:07+05:30
draft: false
---

```java {linenos=table}
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br;
		OutputStreamWriter w = new OutputStreamWriter(System.out);
		BufferedWriter bw = new BufferedWriter(w);
		String pickLocalFile = System.getenv().get("PICK_LOCAL_FILE");
		if (pickLocalFile != null && pickLocalFile.equals("true")) {
			FileReader r = new FileReader(
					"C:\\Users\\Khalil Ahmed\\Documents\\workspace-spring-tool-suite-4-4.9.0.RELEASE\\CompetetiveProgramming\\src\\input.txt");
			br = new BufferedReader(r);
		} else {
			InputStreamReader r = new InputStreamReader(System.in);
			br = new BufferedReader(r);
		}
		int n = Integer.valueOf(br.readLine());
		String[] input = br.readLine().split(" ");
		int[] arr = new int[n];
		for (int j = 0; j < n; j++) {
			arr[j] = Integer.valueOf(input[j]);
		}

		mergeSort(arr, 0, n - 1);

		int t = Integer.valueOf(br.readLine());
		while (t > 0) {
			int value = Integer.valueOf(br.readLine());
			int low = 0, high = n - 1, mid, index = -1, count = 0;
			while (low <= high) {
				mid = (low + high) / 2;
				if (arr[mid] == value) {
					index = mid;
					count = 1;
					break;
				} else if (arr[mid] > value) {
					high = mid - 1;
				} else {
					low = mid + 1;
				}
			}
			if (index != -1) {
				for (int i = index + 1; i < n; i++) {
					if (arr[i] == value) {
						count++;
					} else {
						break;
					}
				}
				for (int i = index - 1; i >= 0; i--) {
					if (arr[i] == value) {
						count++;
					} else {
						break;
					}
				}
			}
			bw.append(count + "");
			bw.newLine();
			t--;
		}

		bw.flush();
		bw.close();
	}

	public static void mergeSort(int[] arr, int low, int high) {
		if (low == high) {
			return;
		}
		int mid = (low + high) / 2;
		mergeSort(arr, low, mid);
		mergeSort(arr, mid + 1, high);
		mergeArr(arr, low, high, mid);
	}

	public static void mergeArr(int[] arr, int low, int high, int mid) {
		int n = high - low + 1;
		int[] temp = new int[n];
		int k = 0, p1 = low, p2 = mid + 1;
		while (p1 <= mid && p2 <= high) {
			if (arr[p1] <= arr[p2]) {
				temp[k] = arr[p1];
				k++;
				p1++;
			} else if (arr[p1] > arr[p2]) {
				temp[k] = arr[p2];
				k++;
				p2++;
			}
		}

		while (p1 <= mid) {
			temp[k] = arr[p1];
			k++;
			p1++;
		}

		while (p2 <= high) {
			temp[k] = arr[p2];
			k++;
			p2++;
		}

		for (int i = low; i <= high; i++) {
			arr[i] = temp[i - low];
		}
	}
}

```