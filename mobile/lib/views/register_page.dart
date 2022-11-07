import 'package:flutter/material.dart';
import 'components/register_page_components/register_user_button_component.dart';

class RegisterPage extends StatelessWidget {
  const RegisterPage({super.key});

  @override
  Widget build(BuildContext context) {
    TextEditingController email = TextEditingController();
    TextEditingController name = TextEditingController();
    TextEditingController password = TextEditingController();
    TextEditingController username = TextEditingController();
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text('Cadastro'),
          Form(
            autovalidateMode: AutovalidateMode.onUserInteraction,
            child: Column(
              children: [
                TextFormField(
                  controller: email,
                  decoration: const InputDecoration(hintText: 'E-mail'),
                ),
                TextFormField(
                    controller: name,
                    decoration:
                        const InputDecoration(hintText: 'Nome Completo')),
                TextFormField(
                  controller: password,
                  decoration: const InputDecoration(
                    hintText: 'Senha',
                  ),
                ),
                TextFormField(
                    controller: username,
                    decoration:
                        const InputDecoration(hintText: 'Nome de Usuário')),
              ],
            ),
          ),
          RegisterUserButtonComponent(
              password: password, email: email, name: name, username: username),
        ],
      ),
    );
  }
}
