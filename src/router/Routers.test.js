const rewire = require("rewire")
const Routers = rewire("./Routers")
const reducerCreate = Routers.__get__("reducerCreate")
const stateHandler = Routers.__get__("stateHandler")
const getSceneStyle = Routers.__get__("getSceneStyle")
const TabsNav = Routers.__get__("TabsNav")
// @ponicode
describe("reducerCreate", () => {
    test("0", () => {
        let callFunction = () => {
            reducerCreate("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            reducerCreate("http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            reducerCreate("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            reducerCreate("Www.GooGle.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            reducerCreate("https://api.telegram.org/bot")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            reducerCreate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("stateHandler", () => {
    test("0", () => {
        let callFunction = () => {
            stateHandler({}, {}, "assign")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            stateHandler({}, {}, "REMOVE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            stateHandler({}, {}, { type: "ADD_TODO" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            stateHandler({}, {}, { type: "RECEIVE_MESSAGE" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            stateHandler({}, {}, "discard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            stateHandler(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getSceneStyle", () => {
    test("0", () => {
        let callFunction = () => {
            getSceneStyle()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("TabsNav", () => {
    test("0", () => {
        let callFunction = () => {
            TabsNav()
        }
    
        expect(callFunction).not.toThrow()
    })
})
