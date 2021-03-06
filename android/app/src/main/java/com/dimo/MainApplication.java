package com.dimo;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.imagepicker.ImagePickerPackage;
import com.rnfs.RNFSPackage;
import com.swmansion.rnscreens.RNScreensPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import fr.snapp.imagebase64.RNImgToBase64Package;
import cl.json.RNSharePackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.horcrux.svg.SvgPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import org.reactnative.camera.RNCameraPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ImagePickerPackage(),
            new RNFSPackage(),
            new RNScreensPackage(),
            new RNGestureHandlerPackage(),
            new RNImgToBase64Package(),
            new RNSharePackage(),
            new RNFetchBlobPackage(),
            new SvgPackage(),
            new ReactNativeContacts(),
            new RNCameraPackage(),
            new RNI18nPackage(),
            new AsyncStoragePackage(),
            new ReactNativeConfigPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
