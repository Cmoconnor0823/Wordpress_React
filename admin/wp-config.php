<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'headlesscrm' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' wfg[Ju@{uf41?U{r3^]GE/(8~fNCzr=D%Bv/{:Q6z ((Jwl2Y_`lz:*23~PaNl?' );
define( 'SECURE_AUTH_KEY',  'y,HBh/ey7cFRkoKX_l+oc}L!tu^:lf-XzxaYIz}tcB$Xy6[4~/sjduUJtczDp?p=' );
define( 'LOGGED_IN_KEY',    'aahoWH,n!(gqH&K`-_=$pP4v<U^:Sda$)LnatD4`cwYyCbLZn/2wJNbmZJ672P!C' );
define( 'NONCE_KEY',        'NO+V8 VXac@DX8xIp+*>zhES}%5fNb|>GL @hd0F.N:L.NCPj=%#>2 Bhs}a*lTt' );
define( 'AUTH_SALT',        '%4/@zc4Mek8yb5} _y<sruH8QKBwkd;ByB@]qh+ku;>IPIgY)v^wG)PWE=4REks$' );
define( 'SECURE_AUTH_SALT', '+D[eOaouG}rEG70Uu?7cA)e0u2h?f8J&F2GjsNP&}Ik-MwDN2ENcc e-&Z[0.0HR' );
define( 'LOGGED_IN_SALT',   '4lE1|r=&?@4q+x)RlE!92UP2? C]8 Bhxm*s=pBEMvlP4p%rJr xk`(PTBj?U$G6' );
define( 'NONCE_SALT',       '/.bn~;zfs}kU8>c1$Q^WKx262I(*{Y,fDA)z FOFQSCnz2(X5j[|Z[+gAtj^cm*w' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
