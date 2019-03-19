import Head from 'next/head';

const Header = () => (
    <div>
        <Head>
            <title>Project Bacchus</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            {/* Font-Awesome Icons */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            {/* Bootstrap CDN */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
            {/* JQUERY */}
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            {/* Firebase */}
            <script src="https://www.gstatic.com/firebasejs/5.9.0/firebase-app.js"></script>
            <script src="https://www.gstatic.com/firebasejs/5.9.0/firebase-auth.js"></script>
            <script src="https://www.gstatic.com/firebasejs/5.9.0/firebase-storage.js"></script>
            {/* App Logic */}
            <script src="/assets/js/userAuth.js"></script>
            <script src="/assets/js/app.js" defer></script>
        </Head>
    </div>
);

export default Header;