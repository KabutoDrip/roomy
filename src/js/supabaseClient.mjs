
import { createClient } from '@supabase/supabase-js'
import { userStore} from './stores.mjs'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function signUp(user) {
    let { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password
    });
    console.log(data);
    return { data, error };
}

export async function login(user) {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password
    });
    if(data) {
        userStore.set({isLoggedIn: true, user: data.user})
    }
    console.log(data);
    return { data, error };
}

export async function checkLogin() {
    const { data: { session } } = await supabase.auth.getSession()

    if(session) {
        userStore.set({isLoggedIn: true, user: session.user})
    } else {
        userStore.set({isLoggedIn: false, user: null})
    }
}