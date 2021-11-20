---
title: "Finding Frequency Solution - Solution 5 - using binary search - two arrays - value and count"
date: 2021-11-20T22:24:07+05:30
draft: false
---

```java {linenos=table}
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int n = Integer.valueOf(br.readLine());
		String[] input = br.readLine().split(" ");
		int[] arr = new int[n];
		for (int j = 0; j < n; j++) {
			arr[j] = Integer.valueOf(input[j]);
		}
		mergeSort(arr, 0, n - 1);
		int[] a = new int[n];
		int[] b = new int[n];

		a[0] = arr[0];
		int k = 0;
		int count = 0;
		for (int i = 0; i < n; i++) {
			if (a[k] == arr[i]) {
				count++;
			} else {
				b[k] = count;
				k++;
				a[k] = arr[i];
				count = 1;
			}
		}
		b[k] = count;
		k++;

		int t = Integer.valueOf(br.readLine());
		while (t > 0) {
			int value = Integer.valueOf(br.readLine());
			int index = bs1(a, value, k);
			if (index == -1) {
				bw.append(0 + "");
			} else {
				bw.append(b[index] + "");
			}
			bw.newLine();
			t--;
		}
		bw.flush();
		bw.close();
	}

	public static int bs1(int[] arr, int value, int n) {
		int low = 0, high = n - 1, mid, index = -1;
		while (low <= high) {
			mid = (low + high) / 2;
			if (arr[mid] == value) {
				index = mid;
				break;
			} else if (arr[mid] > value) {
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		}
		return index;
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