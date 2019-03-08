//
//  Vpn.swift
//  rnpv
//
//  Created by Efrei Paris on 08/03/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(VPN)
class VPN: NSObject {
  
  @objc
  static var status = false
  
  @objc
  func connect() {
    VPN.status = !VPN.status
    print("Connected")
  }
  
  func constantsToExport() -> [AnyHashable: Any]! {
    return [
      "appName": "iLoveVPN",
    ]
  }
}
