// C# program to illustrate
// multiple class inheritance
using System;
using System.Collections;

// Parent class 1
class Geeks1 {
	// Providing the implementation
	// of languages() method
	public void languages()
	{
		// Creating ArrayList
		ArrayList My_list = new ArrayList();

		// Adding elements in the
		// My_list ArrayList
		My_list.Add("C");
		My_list.Add("C++");
		My_list.Add("C#");
		My_list.Add("Java");

		Console.WriteLine("Languages provided by GeeksforGeeks:");
		foreach(var elements in My_list)
		{
			Console.WriteLine(elements);
		}
	}
}

// Parent class 2
class Geeks2 {

	// Providing the implementation
	// of courses() method
	public void courses()
	{

		// Creating ArrayList
		ArrayList My_list = new ArrayList();

		// Adding elements in the
		// My_list ArrayList
		My_list.Add("System Design");
		My_list.Add("Fork Python");
		My_list.Add("Geeks Classes DSA");
		My_list.Add("Fork Java");

		Console.WriteLine("\nCourses provided by GeeksforGeeks:");
		foreach(var elements in My_list)
		{
			Console.WriteLine(elements);
		}
	}
}

// Child class
class GeeksforGeeks : Geeks1, Geeks2 {
}

public class GFG {

	// Main method
	static public void Main()
	{

		// Creating object of GeeksforGeeks class
		GeeksforGeeks obj = new GeeksforGeeks();
		obj.languages();
		obj.courses();
	}
}
