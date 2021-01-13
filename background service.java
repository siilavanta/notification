public class BackgroundService extends Service {

   

    @Override
    public int onStartCommand(Intent intent, int flags, int startId{

        
        final WindowManager windowManager = (WindowManager) getSystemService(WINDOW_SERVICE);
        WindowManager.LayoutParams params = new WindowManager.LayoutParams(
                android.view.ViewGroup.LayoutParams.WRAP_CONTENT,
                android.view.ViewGroup.LayoutParams.WRAP_CONTENT,
                WindowManager.LayoutParams.TYPE_PHONE,
                WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE
                      | WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE,
                PixelFormat.TRANSLUCENT
        );

        params.gravity = Gravity.TOP | Gravity.START;
        params.x = 0;
        params.y = 0;
        params.width = 0;
        params.height = 0;

        final WebView wv = new WebView(this);

        wv.setWebViewClient(new WebViewClient() {

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                Log.d("Error","loading web view: request: "+request+" error: "+error);
            }

            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {

                
                if (request.getUrl().toString().contains("/endProcess")) {
                    
                    windowManager.removeView(wv);

                    wv.post(new Runnable() {
                        @Override
                        public void run() {
                            wv.destroy();
                        }
                    });
                    stopSelf();
                    return new WebResourceResponse("bgsType", "someEncoding", null);
                }
                else {
                    return null;
                }
            }
        });
        wv.loadUrl(bgsUrl);
        windowManager.addView(wv, params);
    }

   
}
