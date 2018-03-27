

module.exports = function CispaCtrl($scope, LightboxImageService) {
  $scope.openDevicePhoto = function(device) {
    var title = device.name
    var enhancedPhoto800 = '/static/app/devices/photo/x800/' + device.image
    LightboxImageService.open(title, enhancedPhoto800)
  }

  var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
  }
  
  $scope.getProcesses = function() {

    var serial = location.toLocaleString().split('/control/')[1]

    console.log ("*************** Getting PROCESSES ***************")
    console.log ("Serial info 1:")
    console.log(serial)

    
    var client = new HttpClient();
      client.get('/app/api/v1/launch?&command=adb&params=-s ' + serial + ' shell ps', function(response) {
          $scope.data = response
          alert ("Processes running on device " + serial + ": \n\n" + response)
          $scope.$apply()
      });
    

  }
}
