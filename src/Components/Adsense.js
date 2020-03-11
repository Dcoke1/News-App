import React from "react";

class AdComponent extends React.Component {
	componentDidMount() {
		(window.adsbygoogle = window.adsbygoogle || []).push({
			google_ad_client: "ca-pub-4931212561127503",
			enable_page_level_ads: true
		});
	}

	render() {
		return <ins className="adsbygoogle" />;
	}
}

export default AdComponent;
