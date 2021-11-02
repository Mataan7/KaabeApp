import * as React from "react";
import {
  View,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const window = Dimensions.get("window");
export const VideoPlayer1 = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        status.isPlaying
          ? video.current.pauseAsync()
          : video.current.playAsync()
      }
    >
      <Video
        ref={video}
        shouldPlay
        style={styles.video}
        source={{
          uri: "https://r2---sn-nvhj5cax-ib5e.googlevideo.com/videoplayback?expire=1635685822&ei=XkF-YZyzEYTm0wWds5SQAQ&ip=41.79.199.50&id=o-AKW-iGLtb5MImf_8BQsrBZXoiKp9eRkJRgYu9y49KOn6&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=gL&mm=31%2C29&mn=sn-nvhj5cax-ib5e%2Csn-hju7enel&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=357500&vprv=1&mime=video%2Fmp4&ns=QpMkYggPE6CcfMK4oRWN1oEG&gir=yes&clen=16027668&dur=694.999&lmt=1542820969215046&mt=1635663889&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5432432&n=YC4g-VNlzOkhVJT_&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhALIxLH97RaaK9IwmGOVWyz4yG2ILoRbHSsuFqfAl6WL0AiEAijXL_0jot44QhNq3g3J1c6ZUiKgyoTbT-tHIzZTpnts%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIge-lodpGDwIeSgj_n2Mk7vezS31f7N0ghxJ5VtSkTNz8CIDsv8y-IPb44TF0mtu34XHu63i77g1PnyaPCBMcyH5c5",
        }}
        resizeMode="stretch"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "red",
  },
  video: {
    width: window.width,
    height: window.height / 3.5,
    backgroundColor: "black",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
