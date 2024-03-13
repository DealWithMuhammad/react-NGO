import { height } from "@mui/system";
import SectionHeader from "components/Common/SectionHeader";
import React from "react";
import { FacebookEmbed } from "react-social-media-embed";

export default function FacebookPost() {
  return (
    <>
      <div>
        <SectionHeader
          headerInfo={{
            title: "Facebook Posts",
            subtitle: "Facebook Posts",
            description: "You can check our facebook latest posts",
          }}
        />
        <div
          className="my-10"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <FacebookEmbed
            url="https://www.facebook.com/ReActMalaysia/posts/pfbid02kxioUYPiC61WmwTLa2YdkPPtsXNSLVCL2kGuiaC4VBqASEUnC1Cyz7yyGaEyjA9Nl"
            width={400}
          />
          <FacebookEmbed
            url="https://www.facebook.com/ReActMalaysia/posts/pfbid02zpwkSzG4i3Za7do286tSw56WTMYaAjNqvqSLfRB3AkxoNevyMZfsJsBtuRM7FX73l"
            width={400}
          />
          <FacebookEmbed
            url="https://www.facebook.com/ReActMalaysia/posts/pfbid0hJxsgnrsWrA4xUJpUTY9sqPCjxYv4vHm7hLjcwwXzLDnXGRPNncByoy4ZAX2BkGBl"
            width={400}
          />
        </div>
      </div>
    </>
  );
}
