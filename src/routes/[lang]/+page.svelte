<script>
import * as m from '../../paraglide/messages'

import {setLanguageTag, languageTag} from "../../paraglide/runtime";
let test = m.admin_tab()
let nums = [1, 2, 3]
</script>




<p>{m.greeting({ name: "Samuel", count: 5 })}</p>
<p>{m.currentLanguageTag({ languageTag: languageTag() })}</p>

    <button on:click={()=>setLanguageTag("de")}>
        <span>Switch to german</span>
    </button>
    <button on:click={() => setLanguageTag("en")}>change language to "en"</button>

<ul>
    {#each nums as tab, idx}
     <li>{m.admin_tab()[idx]}{tab}</li>
        {/each}

</ul>
