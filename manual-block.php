<?php
/**
 * Plugin Name: Manual Custom Block
 * Description: Creating a WordPress block manually
 * Version:           0.1.0
 * Author:            Praveen Dias
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

 function manual_custom_block_script_register(){
    wp_enqueue_script('manual-custom-block',plugin_dir_url(__FILE__).'manual-block.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);
 }

 add_action('enqueue_block_editor_assets', 'manual_custom_block_script_register');