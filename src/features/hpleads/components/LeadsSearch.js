import React, {useRef} from "react";
import {useForm} from "../../../customHooks/useForm";
import {useDispatch} from "react-redux";
import { filterLeadsByName, filterClear } from "../leadsSlice";
import styles from "./LeadsSearch.module.scss";

export const LeadsSearch = () => {
    const [formValues, setFormValues] = useForm({s: ""});
    const dispatch = useDispatch();
    const inputRef = useRef();

    return (
        <div className={`d-flex justify-content-space-between ${styles.leadsSearch}`}>
            <div className="input-group">
                <div className="input-group-prepend d-none d-sm-flex">
                    <span className="input-group-text">Name</span>
                </div>
                <input
                    type="text"
                    className={`form-control ${styles.input}`}
                    placeholder="John"
                    aria-label="Name"
                    ref={inputRef}
                    name="s"
                    value={formValues.s}
                    onChange={setFormValues}
                />
                <div className={`input-group-append ${styles.control}`}>
                    <button className="btn bg-orange" type="button" onClick={() => dispatch(filterLeadsByName(formValues.s))}>Submit</button>
                    <button className="btn btn-danger" type="button" onClick={() => dispatch(filterClear())}>Clear</button>
                    <button className="btn btn-primary" type="button" onClick={() => inputRef.current.focus()}>Focus Me</button>
                </div>
            </div>
        </div>
    );
};
