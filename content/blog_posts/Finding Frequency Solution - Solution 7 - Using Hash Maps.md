---
title: "Finding Frequency Solution - Solution 7 - Using Hash Maps"
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
import java.util.HashMap;

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
		HashMap<Integer, Integer> countMap = new HashMap<Integer, Integer>();
		int n = Integer.valueOf(br.readLine());
		String[] input = br.readLine().split(" ");
		for (int j = 0; j < n; j++) {
			int x = Integer.valueOf(input[j]);
			countMap.put(x, countMap.getOrDefault(x, 0) + 1);
		}
		int t = Integer.valueOf(br.readLine());
		while (t > 0) {
			int q = Integer.valueOf(br.readLine());
			bw.append(countMap.getOrDefault(q, 0) + "");
			bw.newLine();
			t--;
		}

		bw.flush();
		bw.close();
	}
}
```