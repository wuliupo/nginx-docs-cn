function get_menu(basepath){
	var base = basepath||'../';
	var nav =
		'<table id="nav" cellpadding="0" cellspaceing="0" border="0"><tr>' +
		'<td class="td" valign="top">' +
		'<h3>Nginx中文文档</h3>' +
		'<ul>' +
		'<li><a href="'+base+'index.html">用户指南首页</a></li>' +
		'<li><a href="'+base+'index.html">目录页</a></li>' +
		'</ul>' +
		'<h3>主要文档</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/overview.html">概述</a></li>' +
			'<li><a href="'+base+'about/whyuseit.html">为什么选择 Nginx ？</a></li>' +
			'<li><a href="'+base+'about/install.html">安装 Nginx</a></li>' +
			'<li><a href="'+base+'about/commandline.html">运行和控制 Nginx - 命令行参数和信号</a></li>' +
			'<li><a href="'+base+'general/notation.html">配置符号参考</a></li>' +
			'<li><a href="'+base+'general/optimizations.html">优化 Nginx</a></li>' +
			'<li><a href="'+base+'general/faq.html">常见问题（FAQ）</a></li>' +
			'<li><a href="'+base+'general/debug.html">调试 nginx</a></li>' +
		'</ul>' +
		'<h3>核心模块</h3>' +
		'<ul>' +
			'<li><a href="'+base+'core/mainmodule.html">主模块</a></li>' +
			'<li><a href="'+base+'core/events.html">事件模块</a></li>' +
		'</ul>' +
		'</td><td class="td_sep" valign="top">' +
		'<h3>基本模块</h3>' +
		'<ul>' +
			'<li><a href="'+base+'standard/httpcore.html">HTTP Core模块*</a></li>' +
            '<li><a href="'+base+'standard/httpupstream.html">HTTP Upstream 模块</a></li>' +
			'<li><a href="'+base+'standard/httpaccess.html">HTTP Access 模块</a></li>' +
			'<li><a href="'+base+'standard/httpauthbasic.html">HTTP Auth Basic 模块</a></li>' +
            '<li><a href="'+base+'standard/httpautoindex.html">HTTP AutoIndex 模块</a></li>' +
			'<li><a href="'+base+'standard/browser.html">Browser</a></li>' +
			'<li><a href="'+base+'standard/charset.html">Charset*</a></li>' +
			'<li><a href="'+base+'standard/httpemptygif.html">Empty GIF</a></li>' +
			'<li><a href="'+base+'standard/httpfcgi.html">FastCGI</a></li>' +
			'<li><a href="'+base+'standard/geo.html">Geo*</a></li>' +
			'<li><a href="'+base+'standard/httpgzip.html">Gzip</a></li>' +
			'<li><a href="'+base+'standard/httpheaders.html">HTTP Headers 模块</a></li>' +
			'<li><a href="'+base+'standard/httpindex.html">HTTP Index 模块</a></li>' +
		    '<li><a href="'+base+'standard/httpreferer.html">Http Referer 模块</a></li>' +
			'<li><a href="'+base+'standard/httplimitzone.html">HTTP Limit Zone 模块</a></li>' +
			'<li><a href="'+base+'standard/httplimitrequest.html">HTTP Limit Requests模块</a></li>' +
			'<li><a href="'+base+'standard/httplog.html">Log</a></li>' +
			'<li><a href="'+base+'standard/map.html">Map*</a></li>' +
			'<li><a href="'+base+'standard/memcached.html">Memcached</a></li>' +
			'<li><a href="'+base+'standard/httpproxy.html">HTTP Proxy 模块</a></li>' +
			'<li><a href="'+base+'standard/httprewrite.html">Rewrite</a></li>' +
			'<li><a href="'+base+'standard/httpssi.html">SSI模块</a></li>' +
			'<li><a href="'+base+'standard/userid.html">User ID</a></li>' +
		'</ul>' +
		'</td><td class="td_sep" valign="top">' +
		'<h3>其他模块</h3>' +
		'<ul>' +
		'<li><a href="'+base+'optional/addition.html">HTTP Addition 模块*</a></li>' +
		'<li><a href="'+base+'optional/embeddedperl.html">Embedded Perl*</a></li>' +
		'<li><a href="'+base+'optional/flv.html">FLV</a></li>' +
		'<li><a href="'+base+'optional/gzipstatic.html">Gzip Precompression</a></li>' +
		'<li><a href="'+base+'optional/randomindex.html">Random Index</a></li>' +
		'<li><a href="'+base+'optional/geoip.html">GeoIP</a></li>' +
		'<li><a href="'+base+'optional/realip.html">Real IP*</a></li>' +
		'<li><a href="'+base+'optional/ssl.html">SSL*</a></li>' +
		'<li><a href="'+base+'optional/stubstatus.html">Stub Status</a></li>' +
		'<li><a href="'+base+'optional/sub.html">Substitution</a></li>' +
		'<li><a href="'+base+'optional/httpdav.html">WebDAV</a></li>' +
		'<li><a href="'+base+'optional/googleperftools.html">Google Perftools*</a></li>' +
		'<li><a href="'+base+'optional/xslt.html">XSLT*</a></li>' +
		'<li><a href="'+base+'optional/securelink.html">Secure Link</a></li>' +
		'<li><a href="'+base+'optional/imagefilter.html">Image Filter</a></li>' +
		'</ul>' +
		'<h3>mail模块</h3>' +
		'<ul>' +
		'<li><a href="'+base+'mail/mailcore.html">Mail Core模块</a></li>' +
		'<li><a href="'+base+'mail/mailauth.html">Mail Auth模块</a></li>' +
		'<li><a href="'+base+'mail/mailproxy.html">Mail Proxy模块</a></li>' +
		'<li><a href="'+base+'mail/mailssl.html">Mail SSL模块</a></li>' +
		'</ul>' +
		'</td><td class="td_sep" valign="top">' +

		'<h3>安装</h3>' +
		'<ul>' +
		'<li><a href="'+base+'setup/nginx-windows.html">nginx在windows上安装</a></li>' +
        '<li><a href="'+base+'setup/nginx-freebsd.html">nginx在freebsd上安装</a></li>' +
		'<li><a href="'+base+'setup/nginx-ubuntu.html">nginx在ubuntu上安装</a></li>' +
		'<li><a href="'+base+'setup/nginx-fedora.html">nginx在fedora上安装</a></li>' +
		'<li><a href="'+base+'about/nginx-php.html" target="_blank">nginx在centos上安装</a></li>' +
		'</ul>' +

		'<h3>配置示例和方法</h3>' +
		'<ul>' +
		'<li><a href="'+base+'example/fullexample.html">完整示例</a></li>' +
        '<li><a href="'+base+'example/fullexample2.html">完整示例（来自 Nginx 站点）</a></li>' +
		'<li><a href="'+base+'example/virtualhost.html">虚拟主机</a></li>' +
		'<li><a href="'+base+'example/loadbanlance.html">负载均衡示例</a></li>' +
		'<li><a href="'+base+'example/doorchain.html">防盗链</a></li>' +
		'<li><a href="'+base+'example/xsendfile.html">X-Sendfile (=> X-Accel-Redirect) in Nginx</a></li>' +
		'<li><a href="'+base+'example/loadbanancercheckerrors.html">Disable the errorlog entries caused by the HW-Loadbalancer</a></li>' +
		'</ul>' +
		'</td></tr></table>';
	return nav;
}
function create_menu(){
	var newNode = document.getElementById("nav");
	if (newNode) return;
	var body = document.getElementsByTagName("body")[0];
	var newNode = document.createElement("div");
	newNode.id = "navContainer";
	newNode.className = "nav-container";
	newNode.innerHTML = get_menu() + "<button class=\"close-nav\" onclick=\"closeNav()\">Close</button>";
	body.appendChild(newNode, null);
}
function closeNav(){
	var newNode = document.getElementById("navContainer");
	if (!newNode) return;
	var body = document.getElementsByTagName("body")[0];
	body.removeChild(newNode);
}