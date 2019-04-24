using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;

namespace AspnetMvcStarter.App_Start
{
    public class JsEngineSwitcherConfig
    {
        public static void Configure(JsEngineSwitcher engineSwitcher)
        {

            engineSwitcher.EngineFactories.AddV8();
            engineSwitcher.DefaultEngineName = V8JsEngine.EngineName;
        }
    }
}