var isTrinityEnabled = true var parser_s = 'nodefiltered' ; var parser_params = ["figcaption","twitter-widget"]; var textSelector_s = '.post-article__post-title__title,.post-content>p,.post-content>div,.post-content>h2' ; var playerType_s = 'sdp' ; var paramsObject = {};var activateFAB = true; var FAB_theme = ''; var FAB_config = {}; var playerEnteredView = false; var utilsPath = '//dev-sas.site/sas/ads/prod/js/audioUtils.js' ; var audioCommonPath = '//dev-sas.site/sas/ads/prod/js/audioCommon.js' ; var FABViewPath = '//dev-sas.site/sas/ads/prod/js/FABView.js' ; var audioSVGPath ='//dev-sas.site/sas/ads/prod/js/audioSVG.js'; var js = document.createElement('script'); js.type = 'text/javascript'; js.src = '/sas/player/voiceOver.js'; js.id = 'trinity-audio-js'; if (document.body && !document.getElementById(js.id)) document.body.appendChild(js); document.addEventListener('DOMContentLoaded', function() { if (!document.getElementById(js.id)) document.body.appendChild(js); });
function testEnv() {
  if (window.document === undefined) {
    postMessage("I'm fairly confident I'm a webworker");
  } else {
    console.log("I'm fairly confident I'm in the renderer thread");
  }
}
