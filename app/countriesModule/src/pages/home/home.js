import { BusyIndicator, Grid } from "@ui5/webcomponents-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "services/auth-services";
import { FormLogin } from "../../components/form-login/form-login";
import { SearchForm } from "./search-form/search-form";
import { SearchResult } from "./search-result/search-result";

export const Home = () => {
    const { isLogged, loading } = useSelector(rootReducer => rootReducer.loginReducer);
    const _useDispatch = useDispatch();
    
    useEffect(() => {
        !isLogged && !loading && _useDispatch(getLogin());
        // console.log('1s');
    }, [])

    return (
        <div className="home container mt-5">
            {(
                <>
                    <SearchForm></SearchForm>
                    <SearchResult></SearchResult>
                </>
            )}

             <div className={`text-center mt-5 ${loading ? '' : 'd-none'}`}>
                <BusyIndicator active size="Medium"></BusyIndicator>
            </div>
        </div>
    )
}