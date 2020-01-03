import * as React from "react"
import {
    HashRouter as Router,
    Route,
    Switch,
} from "react-router-dom"
import { connect } from "react-redux"

import * as _ from "lodash"
import { LeftNav } from "@curefit/lookfit-lib"
import { Posts } from "./components/Posts"
import { Comments } from "./components/Comments"
import { Users } from "./components/Users"

class RouterComponent extends React.Component<any, any> {
    public render(): any {
        const leftNavData = {
            links: [
                {
                    to: "/",
                    text: "Posts"
                },
                {
                    to: "/comments",
                    text: "Comments"
                },
                {
                    to: "/users",
                    text: "Users"
                }
            ],
            isLogOutReq: true,
            leftBrandImg: require("./assets/img/logo.png")
        }

        return (
            <Router>
                <div style={{ display: "flex", maxHeight: "100vh" }}>
                    <LeftNav data={leftNavData} />
                    <Switch>
                        <Route path="/" exact={true} component={Posts} />
                        <Route path="/posts" exact={true} component={Posts} />
                        <Route path="/comments" exact={true} component={Comments} />
                        <Route path="/users" exact={true} component={Users} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state: any): any {
    return { ...state }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

const RouterContainer = connect(mapStateToProps, mapDispatchToProps)(RouterComponent)
export { RouterContainer }
