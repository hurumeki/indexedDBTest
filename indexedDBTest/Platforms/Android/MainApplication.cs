using Android.App;
using Android.Runtime;

namespace indexedDBTest;

[Application]
public class MainApplication : MauiApplication
{
	public MainApplication(IntPtr handle, JniHandleOwnership ownership)
		: base(handle, ownership)
	{
        Android.Webkit.WebView.SetWebContentsDebuggingEnabled(true);
    }

    protected override MauiApp CreateMauiApp() => MauiProgram.CreateMauiApp();
}

