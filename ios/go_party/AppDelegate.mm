#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <Firebase.h>

#import <AuthenticationServices/AuthenticationServices.h>
#import <SafariServices/SafariServices.h>
#import <FBSDKCoreKit/FBSDKCoreKit-Swift.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
      didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    self.moduleName = @"go_party";
    [FIRApp configure];
    [
      [FBSDKApplicationDelegate sharedInstance]
        application:application
        didFinishLaunchingWithOptions:launchOptions
    ];
    self.initialProps = @{};

    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridg {
  return [self getBundleURL];
}

- (NSURL *)getBundleURL {
  #if DEBUG
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
  #else
    return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  #endif
}

@end
