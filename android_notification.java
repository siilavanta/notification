private void notification_Actions() { 
	        int notificationId = 5; 
	        //init notification 
	        NotificationCompat.Builder builder = new NotificationCompat.Builder(this) 
	                .setSmallIcon(R.drawable.logo) 
	                .setLargeIcon(BitmapFactory.decodeResource(getResources(), R.drawable.logo)) 
	                .setContentTitle("Action Buttons") 
	                .setStyle(new NotificationCompat.BigTextStyle().bigText("Click view to visit Google.")) 
	                .setAutoCancel(true) 
	                .setDefaults(NotificationCompat.DEFAULT_ALL); 
	 
	        //the actions in a notification are handeled through intents 
	        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com")); 
	        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent, 0); 
	 
	        builder.addAction(android.R.drawable.ic_menu_view, "VIEW", pendingIntent); 
	 
	        Uri path = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION); 
	        builder.setSound(path); 
	 
	        NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE); 
	 
	        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) { 
	            String channelId = "YOUR_CHANNEL_ID"; 
	            NotificationChannel channel = new NotificationChannel(channelId, 
	                    "Channel human readable title", 
	                    NotificationManager.IMPORTANCE_DEFAULT); 
	            notificationManager.createNotificationChannel(channel); 
	            builder.setChannelId(channelId); 
	        } 
	 
	        notificationManager.notify(notificationId,builder.build()); 
	    } 
