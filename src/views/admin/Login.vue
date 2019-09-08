<<template>
    <b-container fluid class="flex-center">
        <b-container>
            <b-row>
                <b-col cols="12" md="6" offset-md="3" class="p-5 white-bg">
                    <!--<div class="text-center">
                        <b-img src="" fluid class="mb-4"></b-img>
                    </div>-->
                    <h1 class="text-center mb-3">RATEMATE</h1>
                    <konobar-form :fields="fields"
                                  submit="Login"
                                  post="login"
                                  @success="$router.push('/admin')">
                    </konobar-form>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    export default {
        data () {
            return {
                fields: [
                    {
                        key: 'username',
                        label: 'Email',
                        type: 'email',
                        required: true
                    },
                    {
                        key: 'password',
                        label: 'Password',
                        type: 'password',
                        required: true
                    }
                ]
            }
        },
    }
</script>