"use client";

import React from "react";
import { FormControl } from "react-bootstrap";
import SendIcon from '@/public/images/icons/send.svg'

const SendMessage = () => {
  return (
    <div className="send-bar position-relative">
      <FormControl
        // value={searchWord}
        // onChange={onChangeSearch}
        type="search"
        placeholder="اضف رداً جديداً"
        className="me-2 w-100 py-2 fs-2 text-black text-opacity-25"
        aria-label="Search"
      />
      <button className="icon-search">
        <SendIcon width="35" />
      </button>
    </div>
  );
};

export default SendMessage;
