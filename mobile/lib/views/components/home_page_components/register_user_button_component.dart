import 'package:flutter/material.dart';

import '../../../model/account_model.dart';
import '../../../services/register_user.dart';

class RegisterUserButtonComponent extends StatelessWidget {
  const RegisterUserButtonComponent({
    Key? key,
    required this.password,
    required this.email,
    required this.name,
    required this.username,
  }) : super(key: key);

  final TextEditingController password;
  final TextEditingController email;
  final TextEditingController name;
  final TextEditingController username;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        if (password.text.length < 8) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
              content: Text('A senha deve possuir ao menos 8 caracteres')));
        }
        if (email.text.isEmpty) {
          ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Um email deve ser fornecido')));
        }
        if (name.text.isEmpty) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
              content: Text('O nome completo deve ser fornecido')));
        }
        if (username.text.isEmpty) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
              content: Text('O nome de usuário deve ser fornecido')));
        } else {
          RegisterUser().call(
            AccountModel(
              email: email.text,
              name: name.text,
              password: password.text,
              username: username.text,
            ),
          );
        }
      },
      child: const Text('Cadastrar'),
    );
  }
}
