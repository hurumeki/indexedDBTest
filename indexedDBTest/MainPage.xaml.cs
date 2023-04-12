namespace indexedDBTest;

public partial class MainPage : ContentPage
{
	//int count = 0;

	public MainPage()
	{
		InitializeComponent();
		string mainDir = FileSystem.Current.AppDataDirectory;
		bool exists = Directory.Exists("Library/WebKit/WebsiteData/LocalStorage");
		var files = Directory.GetFiles(mainDir, "*");
		System.Diagnostics.Debug.WriteLine("******************** Start");
		System.Diagnostics.Debug.Write(files);
		System.Diagnostics.Debug.Write(exists);

		//mainWebView.Source = $"https://learn.microsoft.com/dotnet/maui";
	}

	private void OnCounterClicked(object sender, EventArgs e)
	{
	}
}
