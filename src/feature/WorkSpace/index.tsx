import Script from 'next/script';

/**
 * Верификация на workspace
 */
const WorkSpaceVerification = () => {
    return (
        <>
            <Script
                id="Workspace-verefication"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(){ var WORKSPACE_VERIFICATION_CODE = 'f83878d4ce5414d56e6e9dca02e5d018'; var img = new Image(1, 1); img.src="https://workspace.ru/local/tools/verification.php?code=f83878d4ce5414d56e6e9dca02e5d018&type=1x1&nocache="+ Math.random(); img.style="display: none;"; document.body.appendChild(img); })();`,
                }}></Script>
            <noscript>
                <img
                    src="https://workspace.ru/local/tools/verification.php?code=f83878d4ce5414d56e6e9dca02e5d018"
                    style={{ display: 'none' }}
                />
            </noscript>
        </>
    );
};

export default WorkSpaceVerification;
