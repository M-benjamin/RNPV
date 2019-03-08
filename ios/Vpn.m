//
//  Vpn.m
//  rnpv
//
//  Created by Efrei Paris on 08/03/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(VPN, NSObject)
// if you want parameter, add it before method with type
// exple: RCT_EXTERN_METHOD(connect, name: string)
RCT_EXTERN_METHOD(connect)

RCT_EXTERN_METHOD(constantsToExport)
@end
